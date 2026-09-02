 -- 1. Insert categories
INSERT INTO categories (name) VALUES
  ('drawing'),
  ('illustration'),
  ('render');

-- 2. Insert Images
INSERT INTO images (id, src, alt, width, height, aspect_ratio, category) VALUES 
('robots','http://localhost:4000/images/ex7.png', 'Hero image of the tank', 1920, 1080, 1.777, 'drawing'),
('box','http://localhost:4000/images/ex8.jpg', 'Thumbnail poster', 800, 1200, 0.666, 'drawing'),
('tempel1','http://localhost:4000/images/tempel11.jpg', 'Temple render', 1080, 1080, 1.0, 'render'),
('tempel2','http://localhost:4000/images/tempel9.jpg', 'Temple render 9', NULL, NULL, NULL, 'render'),
('tempel3','http://localhost:4000/images/tempel6.jpg', 'Temple render 6', NULL, NULL, NULL, 'render'),
('drawing1','http://localhost:4000/images/drawing1.jpg', 'Drawing 21', NULL, NULL, NULL, 'drawing'),
('drawing2','http://localhost:4000/images/drawing2.jpg', 'Drawing 26', NULL, NULL, NULL, 'drawing'),
('steve','http://localhost:4000/images/steve.jpg', 'Steve Jobs poster', NULL, NULL, NULL, 'illustration');


-- 3. Insert Project
INSERT INTO projects (id, title, created, description, collaborators, url, tags, hero_img_name, thumbnail_img_name) 
VALUES 
 ('virtual-aquarium', 'VIRTUAL AQUARIUM', '2025-01-02 15:04:05', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et', 'Kowalski, Pummelove', 'https://www.schlaubeere.de', 'tempel, react, 3d', 'robots', 'robots'),
 ('temple-diorama', 'Temple Project', '2026-01-02 09:04:05', 'Ancient temple visualization project', 'Design Team', 'https://example.com/temple','university, vue, virtuel', 'tempel1', 'tempel2');

INSERT INTO content_bits (id, position, project_id, type, styling, text_content, image_name) VALUES
(1, 1 ,'virtual-aquarium','title', 'bigHeading right horizontal inverted', 'WE NEED HELP PLS', NULL),
(2, 2 ,'virtual-aquarium','text', 'span2', 'This time he decided to keep his head low. Shadows wander arround. Peeking arround the cornder. Atmosphere could be not possibly worse. No wonder by how many people craving for his life.eep his head low. Shadows wander arround. Peeking arround the cornder. Atmosphere could be not possibly worse. No wonde eep his head low. Shadows wander arround. Peeking arround the cornder. Atmosphere could be not possibly worse. No wonde eep his head low. Shadows wander arround. Peeking arround the cornder. Atmosphere could be not possibly worse. No wonde', NULL),
(3, 4 ,'virtual-aquarium','image', '', NULL, 'box'),
(4, 5 ,'virtual-aquarium','title', 'bigHeading left', 'A SMALL STEP IN THE WRIONG DIRECTION', NULL),
(5, 6 ,'virtual-aquarium','image', '', NULL, 'drawing1'),
(6, 7 ,'virtual-aquarium','title', 'smallHeading vertical inset alignRight hold-1', 'A BIG STEP IN THE WRIONG DIRECTION', NULL),
(7, 8 ,'virtual-aquarium','text', 'left inset', 'This time he decided to keep his head low. Shadows wander arround. Peeking arround the cornder. Atmosphere could be not possibly worse. No wonder by how man', NULL),
(8, 9 ,'virtual-aquarium','image', 'inset', NULL, 'drawing2'),
(9, 10 ,'virtual-aquarium','text', 'right', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e', NULL);
