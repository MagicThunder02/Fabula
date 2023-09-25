CREATE TABLE IF NOT EXISTS bonds (
    character_id serial,
    bond_id serial,
    target varchar(255),
    admiration BOOLEAN,
    inferiority BOOLEAN,
    loyalty BOOLEAN,
    mistrust BOOLEAN,
    affection BOOLEAN,
    hatred BOOLEAN,
    strenght int,
    PRIMARY KEY (character_id, bond_id)
);