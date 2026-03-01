
//Link: https://dbdiagram.io
// One project can have multiple sections, one section can have multiple images
Table images {
  id int [pk, increment]
  image blob
  alt text
}

Table section {
  id int [pk, increment]
  title text
  description text
  full_image_url text
  image_id int [ref: > images.id]
}

Table projects {
  id int [pk, increment]
  title text
  description text
  full_image_url text
  image_id int [ref: > images.id]
}

