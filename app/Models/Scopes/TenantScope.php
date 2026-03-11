<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

// class TenantScope implements Scope
// {
//     public function apply(Builder $builder, Model $model)
//     {
//         // Assuming 'tenant' is set in the application context
//         $tenant = app('tenant');

//         // Ensure tenant is available
//         if ($tenant) {
//             $builder->where('tenant_id', $tenant->id);
//         }
//     }
// }
