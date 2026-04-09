
CREATE TABLE watch (
    sale_id SERIAL PRIMARY KEY,
    brand VARCHAR(50),
    model VARCHAR(100),
    city VARCHAR(50),
    units_sold INT,
    price DECIMAL(10,2),
    sale_date DATE
)

INSERT INTO watch (brand, model, city, units_sold, price, sale_date) VALUES
('Boat', 'Storm Call', 'Mumbai', 10, 1500.00, '2023-10-01'),
('Boat', 'Storm Call', 'Delhi', 15, 1500.00, '2023-10-02'),
('Noise', 'ColorFit', 'Bangalore', 20, 2000.00, '2023-10-01'),
('Noise', 'ColorFit', 'Mumbai', 5, 2000.00, '2023-10-03'),
('Apple', 'Watch Series 9', 'Mumbai', 2, 45000.00, '2023-10-01'),
('Apple', 'Watch Series 9', 'Bangalore', 8, 45000.00, '2023-10-02'),
('Samsung', 'Galaxy Watch', 'Delhi', 3, 25000.00, '2023-10-01'),
('Boat', 'Xtend', 'Pune', 25, 1200.00, '2023-10-04'),
('Noise', 'Pro 4', 'Delhi', 12, 2500.00, '2023-10-05');

SELECT * FROM watch;

SELECT COUNT(*) AS total_transactions FROM watch;

SELECT SUM(units_sold * price) AS total_revenue 
FROM watch;

SELECT AVG(price) AS avg_watch_price 
FROM watch;

SELECT MIN(price) AS cheapest, MAX(price) AS costliest 
FROM watch;

SELECT brand, SUM(units_sold) AS total_units_sold
FROM watch
GROUP BY brand
ORDER BY total_units_sold DESC;

SELECT city, SUM(units_sold * price) AS city_revenue
FROM watch
GROUP BY city
ORDER BY city_revenue DESC;

SELECT city, brand, SUM(units_sold) AS units
FROM watch
GROUP BY city, brand
ORDER BY city ASC, units DESC;

SELECT brand, SUM(units_sold) AS total_units, MAX(price)
FROM watch
WHERE price > 1000
GROUP BY brand
HAVING SUM(units_sold) > 20;

SELECT city, AVG(price) AS avg_price
FROM watch
GROUP BY city
HAVING AVG(price) > 10000;