from app.models import db, Film, environment, SCHEMA

def seed_films():
    lotr = Film(
        title="Lord of the Rings: The Fellowship of the Ring",
        year=2001,
        poster="https://imgs.search.brave.com/Hxod_Bp9be-mFxHBxARo_7kcbDSA4ytYE5xccgCrl5o/rs:fit:250:368:1/g:ce/aHR0cDovL3d3dy50/b2xraWVuZ2F0ZXdh/eS5uZXQvdy9pbWFn/ZXMvdGh1bWIvZC9k/Mi9UaGVfTG9yZF9v/Zl90aGVfUmluZ3Nf/LV9UaGVfRmVsbG93/c2hpcF9vZl90aGVf/UmluZ18tX0Vuc2Vt/YmxlX3Bvc3Rlci5q/cGcvMjUwcHgtVGhl/X0xvcmRfb2ZfdGhl/X1JpbmdzXy1fVGhl/X0ZlbGxvd3NoaXBf/b2ZfdGhlX1Jpbmdf/LV9FbnNlbWJsZV9w/b3N0ZXIuanBn",
        still="https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/06/lord-of-the-rings.gif",
        tagline="ONE RING TO RULE THEM ALL",
        synopsis="Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
        runtime=179,
        director="Peter Jackson",
        studio="New Line Cinema",
        genre="Fantasy",
        language="English",
        country="New Zealand",
        producer="Barrie M. Osborne",
        writer="J.R.R. Tolkien",
        editor="John Gilbert",
        cinematographer="Andrew Lesnie"
    )
    odyssey = Film(
        title="2001: A Space Odyssey",
        year=1968,
        poster="https://imgs.search.brave.com/UH_0L2H2g-_AQwx36rWpBzZ243Hv8PCuZwqA_fDACrw/rs:fit:1064:1200:1/g:ce/aHR0cDovLzIuYnAu/YmxvZ3Nwb3QuY29t/Ly0wUzhoYzQzeGJY/QS9UMUJ6Z3lIb2VO/SS9BQUFBQUFBQUE4/ay90Q19Ocmhyc3N1/QS9zMTYwMC8yMDAx/LWEtc3BhY2Utb2R5/c3NleS5qcGVn",
        still="https://cdn.mos.cms.futurecdn.net/03ac1d8e427c856386fae7bebfe2c302-970-80.gif",
        tagline="THE ULTIMATE TRIP",
        synopsis="Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world’s most advanced super computer.",
        runtime=149,
        director="Stanley Kubrick",
        studio="Metro-Goldwyn-Mayer",
        genre="Science fiction",
        language="English",
        country="United States",
        producer="Victor Lyndon",
        writer="Arthur C. Clarke",
        editor="Ray Lovejoy",
        cinematographer="Geoffrey Unsworth"
    )
    oldboy = Film(
        title="Old Boy",
        year=2003,
        poster="https://imgs.search.brave.com/3Z0e95L92dAGeCp70E4snxq35iKLyfkwb6CRvAgI-oE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhlbW92aWVkYi5v/cmcvdC9wL29yaWdp/bmFsL2lkQmFSRXNB/R1RqUFpQcmxBZDF3/OFNWelV6ZC5qcGc",
        still="https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/06/movie-cinemagraph-gifsoldboy.gif",
        tagline="15 YEARS OF IMPRISONMENT, FIVE DAYS OF VENGEANCE",
        synopsis="With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate businessman seeks revenge on his captors.",
        runtime=120,
        director="Park Chan-wook",
        studio="Show East",
        genre="Thriller",
        language="Korean",
        country="South Korea",
        producer="Syd Lim",
        writer="Park Chan-wook",
        editor="Kim Sang-bum",
        cinematographer="Jeong Jeong-hun"
    )
    casino = Film(
        title="Casino Royale",
        year=2006,
        poster="https://imgs.search.brave.com/Hd51RUYAFUHCdnhuTxCdhuhP-BWPn6j6mW3VppIKxxc/rs:fit:1200:1200:1/g:ce/aHR0cDovL2ltZzEu/d2lraWEubm9jb29r/aWUubmV0L19fY2Iy/MDEyMDMyOTE3MjI0/OC9qYW1lc2JvbmQv/aW1hZ2VzL2QvZGYv/Q2FzaW5vX1JveWFs/ZV9wb3N0ZXIuanBl/Zw",
        still="https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/06/casino-royale.gif",
        tagline="EVERYONE HAS A PAST. EVERY LEGEND HAS A BEGINNING.",
        synopsis="Le Chiffre, a banker to the world’s terrorists, is scheduled to participate in a high-stakes poker game in Montenegro, where he intends to use his winnings to establish his financial grip on the terrorist market. M sends Bond—on his maiden mission as a 00 Agent—to attend this game and prevent Le Chiffre from winning. With the help of Vesper Lynd and Felix Leiter, Bond enters the most important poker game in his already dangerous career.",
        runtime= 144,
        director="Martin Campbell",
        studio="Columbia Pictures",
        genre="Action",
        language="English",
        country="United Kingdom",
        producer="Barbara Broccoli",
        writer="Neal Purvis",
        editor="Stuart Baird",
        cinematographer="Phil Meheux"
    )
    american = Film(
        title="American Psycho",
        year=2000,
        poster="https://imgs.search.brave.com/NTWZC6wsb_dMdfLxchuFGBePUUFqKGWN-SkLED8sfFI/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5j/aW5lbWFzdGVycGll/Y2VzLmNvbS9hcHN5/Y2hvamFuMDguanBn",
        still="https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/06/american-psycho.gif",
        tagline="I THINK MY MASK OF SANITY IS ABOUT TO SLIP",
        synopsis="A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his illogical, gratuitous fantasies.",
        runtime=102,
        director="Mary Harron",
        studio="Lionsgate",
        genre="Drama",
        language="English",
        country="United States",
        producer="Ernie Barbarash",
        writer="Guinevere Turner",
        editor="Andrew Marcus",
        cinematographer="Andrzej Sekula"
    )
    blade = Film(
        title="Blade Runner",
        year=1982,
        poster="https://imgs.search.brave.com/D2rUWMfvr8_1eDOKHZ2fWfDWRlCdjhdIGFLaTBoYfis/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMS53/cC5jb20va2VpdGhs/b3Zlc21vdmllcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTcvMTAvYmxhZGVy/dW5uZXIuanBnP2Zp/dD0xNjAwJTJDMjQw/MCZzc2w9MQ",
        still="https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/06/blade-runner.gif",
        tagline="MAN HAS MADE HIS MATCH… NOW IT’S HIS PROBLEM.",
        synopsis="In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
        runtime=118,
        director="Ridley Scott",
        studio="Warner Bros. Pictures",
        genre="Science fiction",
        language="English",
        country="United States",
        producer="Michael Deeley",
        writer="Hampton Fancher",
        editor="Marsha Nakashima",
        cinematographer="Jordan Cronenweth"
    )
    eraserhead = Film(
        title="Eraserhead",
        year=1977,
        poster="https://imgs.search.brave.com/65HJ6ch0XW_cqdv4KZ8OkpBmXi0JI_d9HjpHprZdWHQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhlbW92aWVkYi5v/cmcvdC9wL29yaWdp/bmFsL2ZqcTJ4WnZX/V0taSnRnOEZHTkhY/ZGJWb0FBZi5qcGc",
        still="https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/06/eraserhead.gif",
        tagline="IN HEAVEN, EVERYTHING IS FINE.",
        synopsis="Henry Spencer tries to survive his industrial environment, his angry girlfriend, and the unbearable screams of his newly born mutant child.",
        runtime=89,
        director="David Lynch",
        studio="American Film Institute",
        genre="Horror",
        language="English",
        country="United States",
        producer="David Lynch",
        writer="David Lynch",
        editor="David Lynch",
        cinematographer="Frederick Elmes"
    )
    fight = Film(
        title="Fight Club",
        year=1999,
        poster="https://imgs.search.brave.com/86G7S6a7vlcJ8WcTwdl7GDH2LTV1xiszBmVIgFhlwNA/rs:fit:692:978:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC8xZC81Mi8wZC8x/ZDUyMGQ5MTY2MDk1/NjI2M2FmNzQzNGE3/ZGJjMmRlYy0tY2xh/c3NpYy1tb3ZpZS1w/b3N0ZXJzLWNsYXNz/aWMtbW92aWVzLmpw/Zw",
        still="https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/06/fight-club.gif",
        tagline="MISCHIEF. MAYHEM. SOAP.",
        synopsis="A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground “fight clubs” forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
        runtime=139,
        director="David Fincher",
        studio="20th Century Fox",
        genre="Drama",
        language="English",
        country="United States",
        producer="Art Linson",
        writer="Jim Uhls",
        editor="James Haygood",
        cinematographer="Jeff Cronenweth"
    )
    pulp = Film(
        title="Pulp Fiction",
        year=1994,
        poster="https://imgs.search.brave.com/Lg-xb6Ek3kqlYl0GcU3oqRD1vParl2r0QDK_IB7Bfjg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzI3MDgzMzY4L3Iv/aWwvMjk1NWRmLzMx/MjE1MzEzMDAvaWxf/MTU4OHhOLjMxMjE1/MzEzMDBfYWdqOS5q/cGc",
        still="https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/06/pulp-fiction.gif",
        tagline="JUST BECAUSE YOU ARE A CHARACTER DOESN’T MEAN YOU HAVE CHARACTER.",
        synopsis="A burger-loving hit man, his philosophical partner, a drug-addled gangster’s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        runtime=154,
        director="Quentin Tarantino",
        studio="Miramax",
        genre="Crime",
        language="English",
        country="United States",
        producer="Lawrence Bender",
        writer="Quentin Tarantino",
        editor="Sally Menke",
        cinematographer="Andrzej Sekula"
    )
    west = Film(
        title="West Side Story",
        year=1961,
        poster="https://imgs.search.brave.com/yNqBLl3T-DGsr62TdjH4j8KHJQ8sSpXXX4aVEiaY_BY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIyNzE5Mzc3L3Iv/aWwvZTkyYzFlLzMw/NzkwMzcxNTQvaWxf/ZnVsbHhmdWxsLjMw/NzkwMzcxNTRfeDg2/MS5qcGc",
        still="https://cdn.mos.cms.futurecdn.net/6d42ed2a60f61db1e4e0a5e49bb0191f-970-80.gif",
        tagline="THE SCREEN ACHIEVES ONE OF THE GREAT ENTERTAINMENTS IN THE HISTORY OF MOTION PICTURES",
        synopsis="In the slums of the upper West Side of Manhattan, New York, a gang of Polish-American teenagers called the Jets compete with a rival gang of recently immigrated Puerto Ricans, the Sharks, to “own” the neighborhood streets. Tensions are high between the gangs but two kids, one from each rival gang, fall in love leading to tragedy.",
        runtime=151,
        director="Robert Wise",
        studio="Seven Arts Productions",
        genre="Musical",
        language="English",
        country="United States",
        producer="Robert Wise",
        writer="Ernest Lehman",
        editor="Thomas Stanford",
        cinematographer="Daniel L. Fapp"
    )
    psycho = Film(
        title="Psycho",
        year=1960,
        poster="https://imgs.search.brave.com/kIMMNSUymm-rfe0AIWM6zljNOUZPfo0L4j1JQZMCWHE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9keW4x/Lmhlcml0YWdlc3Rh/dGljLmNvbS9sZj9z/ZXQ9cGF0aFs0JTJG/MiUyRjMlMkY1JTJG/NDIzNTg2M10mY2Fs/bD11cmxbZmlsZTpw/cm9kdWN0LmNoYWlu/XQ",
        still="https://cdn.mos.cms.futurecdn.net/8c8670984f1b76d4d795dd81bb03fdd2-970-80.gif",
        tagline="A NEW—AND ALTOGETHER DIFFERENT—SCREEN EXCITEMENT!!!",
        synopsis="When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
        runtime=1960,
        director="Alfred Hitchcock",
        studio="Shamley Productions",
        genre="Horror",
        language="English",
        country="United States",
        producer="Alfred Hitchcock",
        writer="Joseph Stefano",
        editor="George Tomasini",
        cinematographer="John L. Russell"
    )
    fargo = Film(
        title="Fargo",
        year=1996,
        poster="https://imgs.search.brave.com/jqjoVBXOa7mqQhZiV67mfir_CB4r0Q1qnEyTJXAP0nw/rs:fit:1000:1200:1/g:ce/aHR0cHM6Ly9mYW5h/cnQudHYvZmFuYXJ0/L21vdmllcy8yNzUv/bW92aWVwb3N0ZXIv/ZmFyZ28tNTMzZjgz/YWY2M2U3Yi5qcGc",
        still="https://cdn.mos.cms.futurecdn.net/774cd8f235d7d29d5a4e72a550a850a7-970-80.gif",
        tagline="A LOT CAN HAPPEN IN THE MIDDLE OF NOWHERE.",
        synopsis="Jerry, a small-town Minnesota car salesman is bursting at the seams with debt… but he’s got a plan. He’s going to hire two thugs to kidnap his wife in a scheme to collect a hefty ransom from his wealthy father-in-law. It’s going to be a snap and nobody’s going to get hurt… until people start dying. Enter Police Chief Marge, a coffee-drinking, parka-wearing - and extremely pregnant - investigator who’ll stop at nothing to get her man. And if you think her small-time investigative skills will give the crooks a run for their ransom… you betcha!",
        runtime=98,
        director="Joel Coen",
        studio="PolyGram Filmed Entertainment",
        genre="Crime",
        language="English",
        country="United States",
        producer="Ethan Coen",
        writer="Joel Coen",
        editor="Joel Coen",
        cinematographer="Roger Deakins"
    )
    fox = Film(
        title="Fantastic Mr. Fox",
        year=2009,
        poster="https://imgs.search.brave.com/uteSYLLhMlijzFNIPE6JA3kNcj_E---QYd4wGemJQb0/rs:fit:1079:1200:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/L19xX0lSOU85eUJm/OC9TdjRIY0VhdmVK/SS9BQUFBQUFBQUFj/WS9Ca0trZjZkVjdy/dy9zMTYwMC9mYW50/YXN0aWMtbXItZm94/LXBvc3Rlci5qcGc",
        still="https://cdn.mos.cms.futurecdn.net/8a95917a4fccd9ba8f54ac700b83d4f4-970-80.gif",
        tagline="DIG THE LIFE FANTASTIC!",
        synopsis="The Fantastic Mr. Fox bored with his current life, plans a heist against the three local farmers. The farmers, tired of sharing their chickens with the sly fox, seek revenge against him and his family.",
        runtime=87,
        director="Wes Anderson",
        studio="Regency Enterprises",
        genre="Animation",
        language="English",
        country="United States",
        producer="Scott Rudin",
        writer="Roald Dahl",
        editor="Stephen Perkins",
        cinematographer="Tristan Oliver"
    )

    db.session.add(lotr)
    db.session.add(odyssey)
    db.session.add(oldboy)
    db.session.add(casino)
    db.session.add(american)
    db.session.add(blade)
    db.session.add(eraserhead)
    db.session.add(fight)
    db.session.add(pulp)
    db.session.add(west)
    db.session.add(psycho)
    db.session.add(fargo)
    db.session.add(fox)

    db.session.commit()

def undo_films():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.films RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM films")

    db.session.commit()
