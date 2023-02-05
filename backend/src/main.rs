use actix_web::{get, post, web, App, HttpResponse, HttpServer, http};
use actix_cors::Cors;
use deadpool_postgres::Pool;
use dotenv::dotenv;

mod postgres;
mod user;

#[get("/users")]
async fn list_users(pool: web::Data<Pool>) -> HttpResponse {
    let client = match pool.get().await {
        Ok(client) => client,
        Err(err) => {
            log::debug!("unable to get postgres client: {:?}", err);
            return HttpResponse::InternalServerError().json("unable to get postgres client");
        }
    };
    match user::User::all(&**client).await {
        Ok(list) => HttpResponse::Ok().json(list),
        Err(err) => {
            log::debug!("unable to fetch users: {:?}", err);
            return HttpResponse::InternalServerError().json("unable to fetch users");
        }
    }
}

#[post("/users")]
async fn create_user(pool: web::Data<Pool>, login: String) -> HttpResponse {
    let client = match pool.get().await {
        Ok(client) => client,
        Err(err) => {
            log::debug!("unable to get postgres client: {:?}", err);
            return HttpResponse::InternalServerError().json("unable to get postgres client");
        }
    };
    match user::User::create(&**client, &login).await {
        Ok(user) => HttpResponse::Ok().json(user),
        Err(err) => {
            log::debug!("unable to fetch user: {:?}", err);
            return HttpResponse::InternalServerError().json("unable to fetch user");
        }
    }
}



fn address() -> String {
    std::env::var("ADDRESS").unwrap_or_else(|_| "127.0.0.1:8000".into())
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    env_logger::init();

    let pg_pool = postgres::create_pool();
    postgres::migrate_up(&pg_pool).await;

    let address = address();
    HttpServer::new(move || {
        let cors = Cors::default()
              .allowed_origin("http://localhost:3000")
              .allowed_methods(vec!["GET", "POST"])
              .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
              .allowed_header(http::header::CONTENT_TYPE)
              .max_age(3600);
        App::new()
            .wrap(cors)
            .app_data(web::Data::new(pg_pool.clone()))
            .service(list_users)
            .service(create_user)
    })
    .bind(&address)?
    .run()
    .await
}
