import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialTables1793026868053 implements MigrationInterface {
    name = 'CreateInitialTables1793026868053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(150) NOT NULL, "password_hash" character varying(255) NOT NULL, "bio" text, "location" character varying(100), "role" character varying(10) NOT NULL DEFAULT 'USER', "status" character varying(15) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "skill_categories" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text, CONSTRAINT "UQ_a99e73db7d2fec4b5ce365029dc" UNIQUE ("name"), CONSTRAINT "PK_efce364bf7be7b92b7d7f948663" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "skills" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text, "category_id" integer NOT NULL, CONSTRAINT "PK_0d3212120f4ecedf90864d7e298" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "skills" ADD CONSTRAINT "FK_47dd0ade7ed449a7aca9b9e6752" FOREIGN KEY ("category_id") REFERENCES "skill_categories"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "skills" DROP CONSTRAINT "FK_47dd0ade7ed449a7aca9b9e6752"`);
        await queryRunner.query(`DROP TABLE "skills"`);
        await queryRunner.query(`DROP TABLE "skill_categories"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
