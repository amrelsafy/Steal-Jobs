<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('fullName');
            $table->integer('age');
            $table->string('mobile');
            $table->string('email');
            $table->string('country');
            $table->string('company');
            $table->string('university');
            $table->string('yearOfGrade');
            $table->string('jobStatus');
            $table->integer('experience');
            $table->date('bdate');
            $table->blob('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
