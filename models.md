Idea
title:string
desc_short:text
desc_long:text

has_many:tags
has_many:likes
has_many:comments
belongs_to:user
status:integer => enum[idea,solution,doing,done]
has_many:technologies


User
email
password

has_many:ideas
has_many:comments
has_many:likes


Like
belongs_to:idea
belongs_to:user

Comment
body:text
belongs_to:idea
belongs_to:user

Technology
title:string
has_many:ideas

Tag
title:string
has_many:ideas
