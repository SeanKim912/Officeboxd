from app.models import db, environment, SCHEMA

def seed_films_actors(films, actors):
    actorsList = list(actors)
    print("ACTORS", actorsList)
    actor1 = actorsList[0]
    actor2 = actorsList[1]
    actor3 = actorsList[2]
    actor4 = actorsList[3]
    actor5 = actorsList[4]
    actor6 = actorsList[5]
    actor7 = actorsList[6]
    actor8 = actorsList[7]
    actor9 = actorsList[8]


    filmsList = list(films)
    print("FILMS", filmsList)

    film1 = filmsList[0]
    film2 = filmsList[1]
    film3 = filmsList[2]
    film4 = filmsList[3]
    film5 = filmsList[4]

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
