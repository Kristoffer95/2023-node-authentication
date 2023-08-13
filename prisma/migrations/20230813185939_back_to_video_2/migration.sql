/*
  Warnings:

  - You are about to drop the `Playlist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlaylistTrack` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PlaylistTrack" DROP CONSTRAINT "PlaylistTrack_playlistId_fkey";

-- DropTable
DROP TABLE "Playlist";

-- DropTable
DROP TABLE "PlaylistTrack";

-- CreateTable
CREATE TABLE "car_owners" (
    "id" SERIAL NOT NULL,
    "bio" TEXT,
    "car_color" TEXT,
    "car_model" TEXT,
    "car_model_year" TEXT,
    "country" TEXT,
    "email" TEXT,
    "first_name" TEXT,
    "gender" TEXT,

    CONSTRAINT "car_owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "address" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
