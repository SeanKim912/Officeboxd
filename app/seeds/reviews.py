from .db import db, environment, SCHEMA, Review

def seed_reviews():
    rvw1 = Review(
        profile_id=1,
        film_id=1,
        watched=True,
        liked=True,
        rating=10,
        review_text="Greatest trilogy of all time, literally perfect. Fight me."
    )
    rvw2 = Review(
        profile_id=1,
        film_id=3,
        watched=True,
        liked= None,
        rating=2,
        review_text="Weird movie. I don't get it. But I do like Pabst Blue Ribbon"
    )
    rvw3 = Review(
        profile_id=2,
        film_id=5,
        watched=True,
        liked=True,
        rating=8,
        review_text="OMG saddest movie ever. I had to lie down and hug my pillow for like an hour!"
    )
    rvw4 = Review(
        profile_id=2,
        film_id=4,
        watched=True,
        liked=None,
        rating=5,
        review_text="The movie has an interesting premise and makes you think, but it's SOOOOO SLOOOWWWWWW."
    )
    rvw5 = Review(
        profile_id=3,
        film_id=1,
        watched=True,
        liked=None,
        rating=3,
        review_text="SFX and action are good, but no female dwarves with beards. Ruined my immersion."
    )

    db.session.add(rvw1)
    db.session.add(rvw2)
    db.session.add(rvw3)
    db.session.add(rvw4)
    db.session.add(rvw5)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
