from app.models import db, Film, environment, SCHEMA

def seed_films():
    lotr = Film(
        title="Lord of the Rings: The Fellowship of the Ring",
        year=2001,
        poster="https://imgs.search.brave.com/Hxod_Bp9be-mFxHBxARo_7kcbDSA4ytYE5xccgCrl5o/rs:fit:250:368:1/g:ce/aHR0cDovL3d3dy50/b2xraWVuZ2F0ZXdh/eS5uZXQvdy9pbWFn/ZXMvdGh1bWIvZC9k/Mi9UaGVfTG9yZF9v/Zl90aGVfUmluZ3Nf/LV9UaGVfRmVsbG93/c2hpcF9vZl90aGVf/UmluZ18tX0Vuc2Vt/YmxlX3Bvc3Rlci5q/cGcvMjUwcHgtVGhl/X0xvcmRfb2ZfdGhl/X1JpbmdzXy1fVGhl/X0ZlbGxvd3NoaXBf/b2ZfdGhlX1Jpbmdf/LV9FbnNlbWJsZV9w/b3N0ZXIuanBn",
        still="https://imgs.search.brave.com/XJBa0D-qac8r5gD4Jg0s_v0RyN98hJ-yy7qKIu9v6vc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YnJlZ28ubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDAxLzA3/L3RoZS1sb3JkLW9m/LXRoZS1yaW5ncy10/aGUtZmVsbG93c2hp/cC1vZi10aGUtcmlu/Z19hMTBmYjMtMjE3/MHgxNDQwLmpwZw",
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
        cinematographer="Andrew Lesnie",
    )
    dogday = Film(
        title="Dog Day Afternoon",
        year=1975,
        poster="https://imgs.search.brave.com/TSGCRC3YsI4ewzo7L9udup5SNTgF7Y9wxYOB__wBYoc/rs:fit:300:450:1/g:ce/aHR0cHM6Ly9pbWFn/ZS50bWRiLm9yZy90/L3AvdzMwMF9hbmRf/aDQ1MF9iZXN0djIv/bWF2cmhyMGlnMmFD/UlI4ZDQ4eWF4dEQ1/YU1RLmpwZw",
        still="https://imgs.search.brave.com/BP_T5XElZsLRV42gWtwYv-zOiSJpmO7DSv2q9uP9qcw/rs:fit:1121:719:1/g:ce/aHR0cHM6Ly9pcmlz/aGNpbmVwaGlsZS5m/aWxlcy53b3JkcHJl/c3MuY29tLzIwMTQv/MTEvdG9wLTM2NS1m/aWxtcy1kb2ctZGF5/LWFmdGVybm9vbi5q/cGc",
        tagline="THE MOST BIZARRE BANK SIEGE EVER",
        synopsis="Based on the true story of would-be Brooklyn bank robbers John Wojtowicz and Salvatore Naturale. Sonny and Sal attempt a bank heist which quickly turns sour and escalates into a hostage situation and stand-off with the police. As Sonny’s motives for the robbery are slowly revealed and things become more complicated, the heist turns into a media circus.",
        runtime=125,
        director="Sidney Lumet",
        studio="Warner Bros. Pictures",
        genre="Crime",
        language="English",
        country="USA",
        producer="Martin Bergman",
        writer="Frank Pierson",
        editor="Dede Allen",
        cinematographer="Victor J. Kemper",
    )
    bluevelvet = Film(
        title="Blue Velvet",
        year=1986,
        poster="https://imgs.search.brave.com/GFVrB9-B6ZgwCX88ocPf3fjlRm1J2K4R6rGdCsTBeVE/rs:fit:211:317:1/g:ce/aHR0cHM6Ly9tZWRp/YS5zZW5zY3JpdGlx/dWUuY29tL21lZGlh/LzAwMDAwNDc4Njc4/Mi9zb3VyY2VfYmln/L0JsdWVfVmVsdmV0/LmpwZw",
        still="https://imgs.search.brave.com/3AKLia_PS6N4D9uW4FzTOlmdHUBHxp_vKsofAIgpZZw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMyLm1pbnV0ZW1l/ZGlhY2RuLmNvbS9p/bWFnZS91cGxvYWQv/Y19maWxsLGdfYXV0/byxoXzEyNDgsd18y/MjIwL3YxNTU1Mjk5/MDUwL3NoYXBlL21l/bnRhbGZsb3NzL2Js/dWVoZWQuanBnP2l0/b2s9SFBQRktRdzI",
        tagline="IT’S A STRANGE WORLD",
        synopsis="The discovery of a severed human ear found in a field leads a young man on an investigation related to a beautiful, mysterious nightclub singer and a group of criminals who have kidnapped her child.",
        runtime= 120,
        director="David Lynch",
        studio="DEG",
        genre="Mystery",
        language="English",
        country="USA",
        producer="Dino De Laurentis",
        writer="David Lynch",
        editor="Duwayne Dunham",
        cinematographer="Frederick Elmes",
    )
    stalker = Film(
        title="Stalker",
        year=1979,
        poster="https://imgs.search.brave.com/L6dudLDMBWm9SuTHEinkzGA5rtM4x-fPHuNWoq5yKu0/rs:fit:302:454:1/g:ce/aHR0cDovL3d3dy5y/ZWVsdmlld3MubmV0/L3Jlc291cmNlcy9p/bWcvcG9zdGVycy90/aHVtYnMvc3RhbGtl/cl9wb3N0ZXIuanBn",
        still="https://imgs.search.brave.com/KwEFIkD-u3LTqqOc-Jgr9jVJQDlWmp7Fg_U-UebS-YQ/rs:fit:1200:675:1/g:ce/aHR0cHM6Ly9jZG4u/dm94LWNkbi5jb20v/dGh1bWJvci9SQlBt/SGFIcU5xckhxVnBj/eTFHV0YyNHZGLUU9/LzB4MDoxOTIweDEw/ODAvMTIwMHgwL2Zp/bHRlcnM6Zm9jYWwo/MHgwOjE5MjB4MTA4/MCkvY2RuLnZveC1j/ZG4uY29tL3VwbG9h/ZHMvY2hvcnVzX2Fz/c2V0L2ZpbGUvOTM5/MTgzMS9zdGFsa2Vy/My5qcGc",
        tagline="AN EERIE JOURNEY TO MAKE DREAMS COME TRUE",
        synopsis="Near a gray and unnamed city is the Zone, a place guarded by barbed wire and soldiers, and where the normal laws of physics are victim to frequent anomalies. A stalker guides two men into the Zone, specifically to an area in which deep-seated desires are granted.",
        runtime=162,
        director="Andrei Tarkovsky",
        studio="Mosfilm",
        genre="Sci-fi",
        language="Russian",
        country="USSR",
        producer="Aleksandra Demidova",
        writer="The Strugatsky Brothers",
        editor="Lyudmila Feiginova",
        cinematographer="Georgi Rerberg",
    )
    synecdoche = Film(
        title="Synecdoche, New York",
        year= 2008,
        poster="https://imgs.search.brave.com/mHWsXkNejoIhkpaH3khTbicFUibq69TkaqaOg7fRk5E/rs:fit:297:436:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS8tTHhueDU1TVdu/eG8vVXNteWdTVDBw/OUkvQUFBQUFBQUFT/dUEvclV2VjF4cDVi/cm8vczE2MDAvU3lu/ZWNkb2NoZSxfTmV3/X1lvcmtfcG9zdGVy/LmpwZw",
        still="https://imgs.search.brave.com/Is-a1V74Q_v_-dtaSF2fuCDK7XlhzA8117afDxy2L-M/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS8tWk5VbFlFQTFN/azQvVnlGdWQ1YnF0/YkkvQUFBQUFBQUFm/X0Uvd183ZG5OMG5k/RTBNUjRQbEpSUlhH/b1F2TlJYYnlXZ2d3/Q0xjQi9zMTYwMC9T/eW5lY2RvY2hlLU5Z/LmpwZw",
        tagline="TRYING TO CAPTURE STORIES WITHIN STORIES",
        synopsis="A theater director struggles with his work, and the women in his life, as he attempts to create a life-size replica of New York inside a warehouse as part of his new play.",
        runtime=124,
        director="Charlie Kaufman",
        studio="Likely Story",
        genre="Drama",
        language="English",
        country="USA",
        producer="Spike Jonze",
        writer="Charlie Kaufman",
        editor="Robert Frazen",
        cinematographer="Frederick Elmes",
    )

    # lotr = Film(
    #     title="",
    #     year=,
    #     poster="",
    #     still="",
    #     tagline="",
    #     synopsis="",
    #     runtime=,
    #     director="",
    #     studio="",
    #     genre="",
    #     language="",
    #     country="",
    #     producer="",
    #     writer="",
    #     editor="",
    #     cinematorgrapher="",
    # )

    db.session.add(lotr)
    db.session.add(dogday)
    db.session.add(bluevelvet)
    db.session.add(stalker)
    db.session.add(synecdoche)
    db.session.commit()

def undo_films():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.films RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM films")

    db.session.commit()
