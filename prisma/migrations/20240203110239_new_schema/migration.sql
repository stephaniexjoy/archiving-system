-- CreateTable
CREATE TABLE "Materials" (
    "id" SERIAL NOT NULL,
    "values" TEXT NOT NULL,
    "labels" TEXT NOT NULL,

    CONSTRAINT "Materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Filetype" (
    "id" SERIAL NOT NULL,
    "values" TEXT NOT NULL,
    "labels" TEXT NOT NULL,

    CONSTRAINT "Filetype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Programs" (
    "id" SERIAL NOT NULL,
    "values" TEXT NOT NULL,
    "labels" TEXT NOT NULL,

    CONSTRAINT "Programs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "employee_no" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "sex" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "profile_photo_path" TEXT,
    "certifications" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Education" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "school" TEXT,
    "bacDegree" TEXT,
    "bacSchool" TEXT,
    "masDegree" TEXT,
    "masSchool" TEXT,
    "docDegree" TEXT,
    "docSchool" TEXT,
    "seminars_trainings" TEXT,
    "experience" TEXT,
    "past_designation" TEXT,
    "subjects_handled" TEXT,
    "presented_papers" TEXT,
    "extension_projs" TEXT,

    CONSTRAINT "User_Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "userId" INTEGER NOT NULL,
    "uploaderName" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "fileRole" TEXT,
    "uploadDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deadline" (
    "userId" INTEGER NOT NULL,
    "uploaderName" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "deadlineCreated" TIMESTAMP(3) NOT NULL,
    "setDeadline" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "description" TEXT,

    CONSTRAINT "Deadline_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Materials_values_key" ON "Materials"("values");

-- CreateIndex
CREATE UNIQUE INDEX "Filetype_values_key" ON "Filetype"("values");

-- CreateIndex
CREATE UNIQUE INDEX "Programs_values_key" ON "Programs"("values");

-- CreateIndex
CREATE UNIQUE INDEX "Activity_id_key" ON "Activity"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_employee_no_key" ON "User"("employee_no");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_Education_userId_key" ON "User_Education"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "File_filePath_key" ON "File"("filePath");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Education" ADD CONSTRAINT "User_Education_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deadline" ADD CONSTRAINT "Deadline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
