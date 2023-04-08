from app.models import db, Collection, environment, SCHEMA

def seed_collections():
    demos = Collection(
        profile_id=1,
        name="Greatest of All Time",
        description="Name says it all",
        films="1,2,3"
    )
    marnies = Collection(
        profile_id=1,
        name="Movies I Hate",
        description="Avoid these movies. Spare your eyes and ears!",
        films="3,5"
    )
    bobbies = Collection(
        profile_id=1,
        name="Movies I Have Seen",
        description="I have seen exactly four movies in my life, and no others.",
        films="2,3,4,5"
    )

    db.session.add(demos)
    db.session.add(marnies)
    db.session.add(bobbies)
    db.session.commit()

def undo_collections():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.collections RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM collections")

    db.session.commit()
