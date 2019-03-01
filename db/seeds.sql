create table posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer REFERENCES users(id)
)

create table users (
    id serial primary key,
    username varchar,
    password varchar,
    balance integer,
    user_image varchar
)

