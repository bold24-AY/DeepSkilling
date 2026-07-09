# Spring Data JPA - Quick Example

## Scenario
Create a Spring Boot application demonstrating Spring Data JPA with a MySQL database.

## Database Setup (Required from User Side)
Run the commands inside the `schema.sql` file in your MySQL client / workbench:
```sql
CREATE DATABASE IF NOT EXISTS ormlearn;
USE ormlearn;

CREATE TABLE IF NOT EXISTS country (
    co_code VARCHAR(2) PRIMARY KEY,
    co_name VARCHAR(50)
);

INSERT INTO country (co_code, co_name) VALUES ('IN', 'India');
INSERT INTO country (co_code, co_name) VALUES ('US', 'United States of America');
```

## Steps Completed
1. Created Maven project structure with `pom.xml` including `spring-boot-starter-data-jpa` and MySQL dependency.
2. Configured database url, username, password, logging, and Hibernate dialect properties in `application.properties`.
3. Created `Country.java` entity model mapped to database table `country`.
4. Created `CountryRepository.java` interface extending `JpaRepository`.
5. Created `CountryService.java` to fetch list of countries.
6. Created `OrmLearnApplication.java` main class to load the Spring context, retrieve the country service, and test getting all countries.
