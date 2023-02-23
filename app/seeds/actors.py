from app.models import db, Actor, environment, SCHEMA

def seed_actors():
    pacino = Actor(
        name="Al Pacino",
        bio=""
    )
    cazale = Actor(
        name="John Cazale",
        bio=""
    )
    wood = Actor(
        name="Elijah Wood",
        bio=""
    )
    viggo = Actor(
        name="Viggo Mortensen",
        bio=""
    )
    kyle = Actor(
        name="Kyle MacLachlan",
        bio=""
    )
    hopper = Actor(
        name="Dennis Hopper",
        bio=""
    )
    anatoliy = Actor(
        name="Anatoliy Solonitsyn",
        bio=""
    )
    hoffman = Actor(
        name="Philip Seymour Hoffman",
        bio=""
    )
    leigh = Actor(
        name="Jennifer Jason Leigh",
        bio=""
    )
    # pacino = Actor(
    #     name=""
    #     bio=""
    # )

    db.session.add(pacino)
    db.session.add(cazale)
    db.session.add(wood)
    db.session.add(viggo)
    db.session.add(kyle)
    db.session.add(hopper)
    db.session.add(anatoliy)
    db.session.add(hoffman)
    db.session.add(leigh)
    db.session.commit()

def undo_actors():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.actors RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM actors")

    db.session.commit()
