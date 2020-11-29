<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Otp_code;
use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //
        $request->validate([
            'email' => ['email', 'required'],
            'password' => ['required']
        ]);

        $credentials = $request->only(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email/Password tidak ditemukan'], 401);
        }

        $data['token'] = $token;
        $data['user'] = auth()->user();
        
        return response()->json([
            'response_code' => '00',
            'response_message' => 'User Berhasil Login',
            'data' => $data
        ]);
    }
}
