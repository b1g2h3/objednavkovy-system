<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Order extends Model
{

    protected $fillable = ['user_id', 'description', 'status'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function amounts(): BelongsToMany
    {
        return $this->belongsToMany(Amount::class);
    }

    public function getstatusAttribute($attribute)
    {
        return [
            0 => 'rozpracovaná',
            1 => 'potvrzena',
        ][$attribute];
    }

    public function format()
    {
        return [
            'id' => $this->id,
            'status' => $this->status,
            'description' => $this->description,
            'created_at' => $this->created_at->format('d.m'),
            'updated_at' => $this->updated_at->diffForHumans(),
        ];
    }

    public function formatedRelatinship()
    {
        return array_merge($this->format(), [
            'amounts' =>  $this->amounts->map->format()
        ]);
    }
}
