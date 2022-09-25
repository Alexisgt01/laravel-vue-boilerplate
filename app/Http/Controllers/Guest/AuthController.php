<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function home()
    {
        return view(RouteServiceProvider::GUEST_VIEW);
    }


    /**
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse|string
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return route(RouteServiceProvider::ADMIN_ROUTE);
        }
        return $this->response($request, __('auth.failed'), 403);
    }

    public function passwordReset(Request $request)
    {

    }

    public function passwordRequest(Request $request)
    {

    }
}
