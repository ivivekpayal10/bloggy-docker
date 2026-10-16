-- Create database
CREATE DATABASE IF NOT EXISTS blogs;
USE blogs;

-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Dummy data
INSERT INTO blogs (title, description) VALUES
  ('Welcome to Bloggy', 'A simple Express + MySQL + EJS blog.'),
  ('Hello World', 'This is a sample blog post.'),
  ('Learning Docker Volumes', 'Named volumes vs bind mounts in Docker.'),
  ('Node.js 22 Alpine', 'Using the node:22-alpine Docker image.'),
  ('Writing SQL Schemas', 'How to design a simple blog table.');
