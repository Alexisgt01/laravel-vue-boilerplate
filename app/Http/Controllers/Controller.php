<?php

namespace App\Http\Controllers;

use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Return response according to request
     *
     * @param $request
     * @param $data
     * @param int $status
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\JsonResponse
     */
    protected function response($request, $data, $status = 200)
    {
        if ($request->ajax()) {
            return response()->json($data, $status);
        }
        if (Auth::check()) {
            return view(RouteServiceProvider::ADMIN_VIEW);
        }
        return view(RouteServiceProvider::GUEST_VIEW);
    }
}
