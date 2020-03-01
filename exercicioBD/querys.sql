/* E.B.1 Crie um script de criação das tabelas. */

create table posts(
	id serial primary key,
	author varchar(50) not null,
	title varchar(50) not null,
	text text not null,
	created_at timestamp not null default current_date,
	updated_at timestamp not null default current_date
);

create table comments(
	id serial primary key,
	post_id integer not null REFERENCES posts(id),
	message text not null,
	auhtor varchar(50) not null,
	created_at timestamp not null default current_date,
	updated_at timestamp not null default current_date
);







/* E.B.2 Faça um script para popular as tabelas. */


insert into posts(id, author, title, text)
values (1, 'Juca da dilva', 'Teste naveTeam', 'Exercícios bonus BD');

insert into comments(post_id, message, auhtor)
values (1, 'primeiro comentario', 'Gabriel Pinheiro');









/* E.B.3 Faça uma querie que traga todos os posts ordenados por title. */


select * from posts order by title;








/* E.B.4 Faça uma querie que traga todos os posts com seus respectivos comments. */


select pt.title as post, message as comment
from posts as pt
	inner join comments as ct on pt.id = ct.post_id;











/* E.B.5 Faça uma querie que traga todos os posts com sua quantidade de comments. */


select pt.title as post, count(*) as qtdcomment
from posts as pt
	inner join comments as ct on pt.id = ct.post_id
group by post;