<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class FactorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!User::where('email', 'test@email.com')->first()) {
            $user = (new User())->fill([
                'email'    => 'test@email.com',
                'name'     => 'Jean-pierre',
                'password' => Hash::make('password'),
            ]);
            $user->save();
        }
        User::factory(1)->create();
    }
}
