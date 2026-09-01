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
INSERT INTO projects (id, title, created, description, collaborators, project_url, hero_img_name, thumbnail_img_name) 
VALUES 
 ('virtual-aquarium', 'VIRTUAL AQUARIUM', '2025-01-02 15:04:05', 'This comprehensive e-commerce platform...', 'Kowalski, Pummelove', 'https://www.schlaubeere.de', 'robots', 'robots'),
 ('temple-diorama', 'Temple Project', '2026-01-02 09:04:05', 'Ancient temple visualization project', 'Design Team', 'https://example.com/temple', 'tempel1', 'tempel2');

-- 4. Insert Tags
INSERT INTO tags (name) VALUES 
  ('react'), 
  ('java'),
  ('p5JS'), 
  ('TS'), 
  ('JavaScript'),
  ('architecture'),
  ('3d-rendering'), 
  ('digital-art');


-- 5. Link Tags to Project
INSERT INTO project_tags (project_id, tag_id) VALUES 
   ('virtual-aquarium', 1), 
  ('virtual-aquarium', 2), 
  ('virtual-aquarium', 3), 
  ('virtual-aquarium', 4),
  ('temple-diorama', 5), 
  ('temple-diorama', 6), 
  ('temple-diorama', 7), 
  ('temple-diorama', 8);

-- 6. Insert a Section
INSERT INTO sections (id, project_id, layout, position) VALUES 
 (1, 'virtual-aquarium', 1, 0),
 (2, 'temple-diorama', 1, 0),
 (3, 'temple-diorama', 2, 1);

-- 7. Insert Section Bits (Elements)
INSERT INTO section_bits (section_id, type, text_content, image_name, position) VALUES
(1, 'title', 'Hier ist ein Titel!', NULL, 0),
(1, 'image', NULL, 'box', 1),
(1, 'text', 'layout 1 hallo ich bin ein langer text...', NULL, 2),
(2, 'title', 'Back to Greeks', NULL, 0),
(2, 'text', 'This project showcases ancient temple designs through 3D rendering and digital art.', NULL, 1),
(2, 'image', NULL, 'tempel1', 2),  -- Drawing 21
(3, 'image', NULL, 'tempel3', 0),  -- Drawing 26
(3, 'image', NULL, 'steve', 1);  -- Steve Jobs poster
