CREATE DATABASE artfolio;

USE artfolio;

CREATE TABLE users(
		emri varchar(40),
        mbiemri varchar(40),
        username varchar(40),
        password varchar(255),
        email varchar(255),
        ditelindja date,
        PRIMARY KEY(username)
);
CREATE TABLE admins(
		admin_username varchar(40),
        password varchar(255),
        email varchar(40),
        PRIMARY KEY(admin_username)
);
CREATE TABLE guest(
		emri varchar(40),
        mbiemri varchar(40),
        email varchar(40),
        ditelindja date,
        adresa varchar(255),
        zip_code int,
        state varchar(255),
        city varchar(255),
        PRIMARY KEY(emri)
);
CREATE TABLE paintings(
		fotoja_piktures BLOB,
        emri_piktures varchar(40),
        pershkrimi_piktures varchar(500),
        cimimi_piktures int,
        koleksioni_piktures varchar(100),
        dimensionet varchar(40),
        PRIMARY KEY(emri_piktures)
);
CREATE TABLE images(
		fotoja_shkrepur BLOB,
        emri_fotos varchar(40),
        pershkrimi_fotos varchar(500),
        cmimi_fotos int,
        koleksioni_fotos varchar(100),
        PRIMARY KEY(emri_fotos)
);
CREATE TABLE artist(
		emri_artistit varchar(40),
        mbiemri_artistit varchar(40),
        vendi_lindjes varchar(40),
        biografia varchar(500),
        PRIMARY KEY(emri_artistit)
);
CREATE TABLE koleksionet(
		emri_koleksionit varchar(100),
        data_fillimit date,
        data_mbarimit date,
        PRIMARY KEY(emri_koleksionit)
);
CREATE TABLE galerite(
		emri_galerise varchar(40),
        vendi varchar(40),
        data_fillimit_g date,
        data_mbarimit_g date,
        koleksioni_shfaqur varchar(100),
        piktura_shfaqur varchar(40),
        PRIMARY KEY(emri_galerise)
);
CREATE TABLE shfaqjet_artikujt(
		emri_shfaqjes varchar(255),
        emri_artikullit varchar(255),
        portali_tv varchar(40),
        data_publikimit date,
        PRIMARY KEY(portali_tv)
);
create table Nakontakto(
		name varchar(100),
        email varchar(40),
        message varchar(400),
        PRIMARY KEY(email,name)
);     
