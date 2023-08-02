create table greetings(
    id integer PRIMARY KEY AUTOINCREMENT,
    language text,
    greeting text
    );

    select * from greetings;

    select count(*) from greetings;

    insert into greetings (language, greeting) values ('zulu', 'sawubona');
    insert into greetings (language, greeting) values ('xhosa', 'molo');
    insert into greetings (language, greeting) values ('sesotho', 'dumela');


delete from greetings where id > 1