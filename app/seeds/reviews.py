from app.models import db, environment, SCHEMA, Review

def seed_reviews():
    rvw1 = Review(
        profile_id=2,
        film_id=1,
        watched=True,
        liked=True,
        rating=10,
        review_text="Greatest trilogy of all time, literally perfect. Fight me."
    )
    rvw2 = Review(
        profile_id=2,
        film_id=4,
        watched=True,
        liked= None,
        rating=2,
        review_text="Eva Green in this movie is soooo fiiiinnnneeeeee."
    )
    rvw3 = Review(
        profile_id=4,
        film_id=6,
        watched=True,
        liked=True,
        rating=8,
        review_text="I spilled my drink during the scary part. My Mr. Pibb is gone now, like tears in the rain."
    )
    rvw4 = Review(
        profile_id=4,
        film_id=2,
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
