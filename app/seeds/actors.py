from app.models import db, Actor, environment, SCHEMA

def seed_actors():
    wood = Actor(
        name="Elijah Wood",
        bio=""
    )
    viggo = Actor(
        name="Viggo Mortensen",
        bio=""
    )
    keir = Actor(
        name="Keir Dullea",
        bio=""
    )
    choi = Actor(
        name="Choi Min-sik",
        bio=""
    )
    craig = Actor(
        name="Daniel Craig",
        bio=""
    )
    green = Actor(
        name="Eva Green",
        bio=""
    )
    mads = Actor(
        name="Mads Mikkelsen",
        bio=""
    )
    dench = Actor(
        name="Judi Dench",
        bio=""
    )
    bale = Actor(
        name="Christian Bale",
        bio=""
    )
    dafoe = Actor(
        name="Willem Dafoe",
        bio=""
    )
    leto = Actor(
        name="Jared Leto",
        bio=""
    )
    lucas = Actor(
        name="Josh Lucas",
        bio=""
    )
    sevigny = Actor(
        name="Chloe Sevigny",
        bio=""
    )
    reese = Actor(
        name="Reese Witherspoon",
        bio=""
    )
    theroux = Actor(
        name="Justin Theroux",
        bio=""
    )
    ford = Actor(
        name="Harrison Ford",
        bio=""
    )
    rutger = Actor(
        name="Rutger Hauer",
        bio=""
    )
    young = Actor(
        name="Sean Young",
        bio=""
    )
    olmos = Actor(
        name="Edward James Olmos",
        bio=""
    )
    hannah = Actor(
        name="Darryl Hannah",
        bio=""
    )
    nance = Actor(
        name="Jack Nance",
        bio=""
    )
    norton = Actor(
        name="Edward Norton",
        bio=""
    )
    pitt = Actor(
        name="Brad Pitt",
        bio=""
    )
    carter = Actor(
        name="Helena Bonham Carter",
        bio=""
    )
    travolta = Actor(
        name="John Travolta",
        bio=""
    )
    jackson = Actor(
        name="Samuel L. Jackson",
        bio=""
    )
    thurman = Actor(
        name="Uma Thurman",
        bio=""
    )
    rhames = Actor(
        name="Ving Rhames",
        bio=""
    )
    keitel = Actor(
        name="Harvey Keitel",
        bio=""
    )
    willis = Actor(
        name="Bruce Willis",
        bio=""
    )
    roth = Actor(
        name="Tim Roth",
        bio=""
    )
    walken = Actor(
        name="Christopher Walken",
        bio=""
    )
    buscemi = Actor(
        name="Steve Buscemi",
        bio=""
    )
    wood = Actor(
        name="Natalie Wood",
        bio=""
    )
    perkins = Actor(
        name="Anthony Perkins",
        bio=""
    )
    leigh = Actor(
        name="Janet Leigh",
        bio=""
    )
    mcdormand = Actor(
        name="Frances McDormand",
        bio=""
    )
    macy = Actor(
        name="William H. Macy",
        bio=""
    )
    stormare = Actor(
        name="Peter Stormare",
        bio=""
    )
    clooney = Actor(
        name="George Clooney",
        bio=""
    )
    streep = Actor(
        name="Meryl Streep",
        bio=""
    )
    murray = Actor(
        name="Bill Murray",
        bio=""
    )

    # pacino = Actor(
    #     name="",
    #     bio=""
    # )

    db.session.add(wood)
    db.session.add(viggo)
    db.session.add(keir)
    db.session.add(choi)
    db.session.add(craig)
    db.session.add(green)
    db.session.add(mads)
    db.session.add(dench)
    db.session.add(bale)
    db.session.add(dafoe)
    db.session.add(leto)
    db.session.add(lucas)
    db.session.add(sevigny)
    db.session.add(reese)
    db.session.add(theroux)
    db.session.add(ford)
    db.session.add(rutger)
    db.session.add(young)
    db.session.add(olmos)
    db.session.add(hannah)
    db.session.add(nance)
    db.session.add(norton)
    db.session.add(pitt)
    db.session.add(carter)
    db.session.add(travolta)
    db.session.add(jackson)
    db.session.add(thurman)
    db.session.add(rhames)
    db.session.add(keitel)
    db.session.add(willis)
    db.session.add(roth)
    db.session.add(walken)
    db.session.add(buscemi)
    db.session.add(leigh)
    db.session.add(mcdormand)
    db.session.add(macy)
    db.session.add(stormare)
    db.session.add(clooney)
    db.session.add(streep)
    db.session.add(murray)

    db.session.commit()

def undo_actors():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.actors RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM actors")

    db.session.commit()
