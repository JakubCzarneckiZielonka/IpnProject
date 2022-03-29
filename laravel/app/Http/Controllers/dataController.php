<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NUsers;

class dataController extends Controller
{
    public function index()
    {
        $data = NUsers::select('select email, pw from `nusers` ');

        return response()->json($data);
    }
}
