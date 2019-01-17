-- CREATE TABLE author(
--     id SERIAL PRIMARY KEY,
--     fname varchar (20),
--     lname VARCHAR (20),
--     bio VARCHAR,
--     img_path VARCHAR
-- );

-- CREATE TABLE categories(
-- id SERIAL PRIMARY KEY ,
-- name VARCHAR
-- );

-- CREATE TABLE blog(
--     id SERIAL PRIMARY KEY , 
--     title VARCHAR , 
    -- author INTEGER REFERENCES categories (id),
--     category INTEGER REFERENCES author (id),
--     body VARCHAR ,
--     create_date DATE ,
--     publish_date DATE ,
--     public BOOLEAN
-- );

-- CREATE TABLE comments(
--     id SERIAL PRIMARY KEY ,
--     username varchar,
--     post_date date,
--     blog_id integer REFERENCES blog (id),
--     body varchar,
--     visible Boolean
-- );

