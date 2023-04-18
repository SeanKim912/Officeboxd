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
    actor10 = actors[9]
    actor11 = actors[10]
    actor12 = actors[11]
    actor13 = actors[12]
    actor14 = actors[13]
    actor15 = actors[14]
    actor16 = actors[15]
    actor17 = actors[16]
    actor18 = actors[17]
    actor19 = actors[18]
    actor20 = actors[19]
    actor21 = actors[20]
    actor22 = actors[21]
    actor23 = actors[22]
    actor24 = actors[23]
    actor25 = actors[24]
    actor26 = actors[25]
    actor27 = actors[26]
    actor28 = actors[27]
    actor29 = actors[28]
    actor30 = actors[29]
    actor31 = actors[30]
    actor32 = actors[31]
    actor33 = actors[32]
    actor34 = actors[33]
    actor35 = actors[34]
    actor36 = actors[35]
    actor37 = actors[36]
    actor38 = actors[37]
    actor39 = actors[38]

    film1 = films[0]
    film2 = films[1]
    film3 = films[2]
    film4 = films[3]
    film5 = films[4]
    film6 = films[5]
    film7 = films[6]
    film8 = films[7]
    film9 = films[8]
    film10 = films[9]
    film11 = films[10]
    film12 = films[11]

    film1.actor.append(actor1)
    film1.actor.append(actor2)
    film2.actor.append(actor3)
    film3.actor.append(actor4)
    film4.actor.append(actor5)
    film4.actor.append(actor6)
    film4.actor.append(actor7)
    film4.actor.append(actor8)
    film5.actor.append(actor9)
    film5.actor.append(actor10)
    film5.actor.append(actor11)
    film5.actor.append(actor12)
    film5.actor.append(actor13)
    film5.actor.append(actor14)
    film5.actor.append(actor15)
    film6.actor.append(actor16)
    film6.actor.append(actor17)
    film6.actor.append(actor18)
    film6.actor.append(actor19)
    film6.actor.append(actor20)
    film7.actor.append(actor21)
    film8.actor.append(actor22)
    film8.actor.append(actor23)
    film8.actor.append(actor24)
    film9.actor.append(actor25)
    film9.actor.append(actor26)
    film9.actor.append(actor27)
    film9.actor.append(actor28)
    film9.actor.append(actor29)
    film9.actor.append(actor30)
    film9.actor.append(actor31)
    film9.actor.append(actor32)
    film9.actor.append(actor33)
    film10.actor.append(actor34)
    film11.actor.append(actor35)
    film11.actor.append(actor36)
    film12.actor.append(actor37)
    film12.actor.append(actor38)
    film12.actor.append(actor39)


    db.session.commit()

def undo_films_actors():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.films_actors RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM films_actors")

    db.session.commit()
