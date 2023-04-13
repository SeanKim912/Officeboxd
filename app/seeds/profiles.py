from app.models import db, Profile, environment, SCHEMA

def seed_profiles():
    admin = Profile(
        user_id=1,
        avatar_url="https://imgs.search.brave.com/f9BShW6s4cScbNMXo4ZL-ERfiGroSjQKUw-Uh6LX_RM/rs:fit:860:681:1/g:ce/aHR0cHM6Ly9oYXBw/eXRyYXZlbC52aWFq/ZXMvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDQvMTQ2LTE0/Njg0NzlfbXktcHJv/ZmlsZS1pY29uLWJs/YW5rLXByb2ZpbGUt/cGljdHVyZS1jaXJj/bGUtaGQucG5n",
        location = "HQ",
        pronoun="They / them",
        bio="Only the administrator can add/edit/delete films from the database. For demonstration purposes only."
    )
    demo = Profile(
        user_id=2,
        avatar_url="https://imgs.search.brave.com/3mJUZ1CE0QCckeKsbCv2Kx-tvYacG0DV6rD_qRBI_Bc/rs:fit:1200:600:1/g:ce/aHR0cHM6Ly9pbWcu/Y2luZW1hYmxlbmQu/Y29tL2ZpbHRlcjpz/Y2FsZS9xdWlsbC84/LzAvMy81LzkvZC84/MDM1OWQzYWY1YTdk/MmNmMTUyMzUyMDM3/MGNlZTZkNGYxYmUx/YTk0LmpwZz9tdz02/MDA",
        location = "Chicago, IL",
        pronoun="He / his",
        bio="Silence your cellphone I'm begging you!"
    )
    marnie = Profile(
        user_id=3,
        avatar_url="https://imgs.search.brave.com/qn1sbtqsEujciJMDXybk7zFsWsGUIsFfD0FSD41qc9Q/rs:fit:1080:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzbXVnLmNv/bS9kb3dubG9hZC8x/MDgweDIxNjAvNjNj/NzU1L21hcmdvdC1y/b2JiaWUtb25jZS11/cG9uLWEtdGltZS1p/bi1ob2xseXdvb2Qt/YWN0cmVzcy5qcGc",
        location = "Los Angeles, CA",
        pronoun="She / her",
        bio="Is the scary part over yet?"
    )
    bobbie = Profile(
        user_id=4,
        avatar_url="https://imgs.search.brave.com/pxGUBDY3dvbKxF57L69gLwpJhfVOpDl-xHgA_1_h_zY/rs:fit:699:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5zak95Skwx/VmREbmhpYmU3LVdt/Y0h3SGFGQiZwaWQ9/QXBp",
        location = "Arlen, TX",
        pronoun="He / his",
        bio="That's my purse! I don't know you!"
    )

    db.session.add(admin)
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()

def undo_profiles():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.profiles RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM profiles")

    db.session.commit()
