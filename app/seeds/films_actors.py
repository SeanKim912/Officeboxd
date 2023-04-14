from app.models import db, Film, Actor, environment, SCHEMA

def seed_films_actors():
    actors = Actor.query.all()
    films = Film.query.all()

    actor1 = actors[0]
    actor2 = actors[1]
    actor3 = actors[2]
    actor4 = actors[3]
    actor5 = actors[4]
    actor6 = actors[5]
    actor7 = actors[6]
    actor8 = actors[7]
    actor9 = actors[8]

    film1 = films[0]
    film2 = films[1]
    film3 = films[2]
    film4 = films[3]
    film5 = films[4]

    film1.actor.append(actor3)
    film1.actor.append(actor4)
    film2.actor.append(actor1)
    film2.actor.append(actor2)
    film3.actor.append(actor5)
    film3.actor.append(actor6)
    film4.actor.append(actor7)
    film5.actor.append(actor8)
    film5.actor.append(actor9)

    db.session.commit()

def undo_films_actors():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.films_actors RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM films_actors")

    db.session.commit()
