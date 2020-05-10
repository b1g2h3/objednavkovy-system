<?php

namespace App\Http\Controllers;

use App\Amount;
use App\Events\OrderAdded;
use App\Http\Resources\Order as OrderResource;
use App\Http\Resources\User as UserResource;
use App\Mail\AdminOrderFormMail;
use App\Mail\OrderFormMail;
use App\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OrderrController extends Controller
{

    public function index()
    {
        $orders = Order::where('user_id', auth()->user()->id)
            ->orderBy('created_at', 'desc')
            ->get();
        return new UserResource($orders);
    }

    public function store(Request $request)
    {
        // $this->authorize('update', auth()->user()->invoice);
        $data = request()->validate($this->rules());
        $order = auth()->user()->orders()->create();
        foreach ($data['order'] as $prodId => $value) {
            $mnozstvi = Amount::create(['product_id' => $prodId, 'mnozstvi' => $value]);
            $order->amounts()->attach($mnozstvi->id);
        }
        $order->load('amounts.product');
        broadcast(new OrderAdded($order));
        return new OrderResource($order);
    }


    public function show(Order $order)
    {
        $order->load('amounts.product');
        return new OrderResource($order);
    }

    public function update(Order $order)
    {
        $data = request()->validate($this->rules());
        $order->amounts()->delete();
        foreach ($data['order'] as $prodId => $value) {
            $mnozstvi = Amount::create(['product_id' => $prodId, 'mnozstvi' => $value]);
            $order->amounts()->attach($mnozstvi->id);
        }
        broadcast(new OrderAdded($order));
    }

    public function confirm(Order $order)
    {
        $user = auth()->user();
        $data = request()->validate([
            'description' => ''
        ]);
        $order->update(['status' => 1, 'description' => request()->description]);
        $url = env('APP_URL') . 'objednavky/' . $order->id;
//        Mail::to($user->email)->send(new OrderFormMail($user, $order, $url));
//        Mail::to(env('ADMIN_EMAIL'))->send(new AdminOrderFormMail($user, $order, $url));
//        broadcast(new OrderAdded($order));
        return response()->json('true');
    }

    public function destroy(Order $order)
    {
        $order->delete();
    }

    public function rules()
    {
        return [
            'order' => 'required',
            'order.*' => 'numeric',
        ];
    }

}
