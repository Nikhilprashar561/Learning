CREATE TABLE ipl_players (
    palyer_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    team VARCHAR(50),
    role VARCHAR(50),
    runs_scored INT CHECK (runs_scored > 0),
    wicket_taken INT CHECK (wicket_taken > 0),
    auction_price_crores INT
);

ALTER TABLE ipl_players 
ADD COLUMN nickname VARCHAR(50);

INSERT INTO ipl_players (name, team, role, runs_scored, wicket_taken, auction_price_crores, nickname) VALUES
('Virat Kohli', 'RCB', 'Batsman', 973, 1, 15.00, 'King Kohli'),
('MS Dhoni', 'CSK', 'Wicketkeeper', 450, 1, 12.00, 'Thala'),
('Jasprit Bumrah', 'Mumbai Indians', 'Bowler', 15, 27, 12.00, 'Jassi'),
('Hardik Pandya', 'Mumbai Indians', 'All-Rounder', 400, 15, 15.00, 'Kung Fu Pandya'),
('Sunil Narine', 'KKR', 'All-Rounder', 350, 20, 8.50, 'Carrom King'),
('Rohit Sharma', 'Mumbai Indians', 'Batsman', 550, 1, 16.00, 'Hitman'),
('Rashid Khan', 'Gujarat Titans', 'Bowler', 50, 19, 15.00, 'The Magician'),
('Rinku Singh', 'KKR', 'Batsman', 475, 1, 0.55, 'The Spirit'),
('Arjun Tendulkar', 'Mumbai Indians', 'Bowler', 10, 3, 0.30, 'Arjun'),
('Kane Williamson', 'LSG', 'Batsman', 600, 1, 11.00, 'Kane Mama'),
('Mystery Player', NULL, 'Batsman', 1, 1, 1.00, 'Mystery Man'); -- Unsold / No Team (NULL Demo)

SELECT * FROM ipl_players;

SELECT name, nickname, team FROM ipl_players;

SELECT * FROM ipl_players WHERE team = 'RCB';

SELECT name, nickname, team FROM ipl_players WHERE auction_price_crores > 10;

SELECT name, nickname, team, wicket_taken, role FROM ipl_players WHERE wicket_taken >= 10 AND role = 'All-Rounder';

SELECT * FROM ipl_players WHERE team = 'CSK' OR team = 'RCB';

SELECT * FROM ipl_players WHERE name LIKE '_a%';