<?php

namespace App\Models\Traits;

use App\Models\Scopes\TenantScope;
use App\Models\Tenant;

// trait BelongsToTenant
// {
//     protected static function bootBelongsToTenant()
//     {
//         // Apply the TenantScope globally
//         static::addGlobalScope(new TenantScope());

//         // Automatically set the tenant_id on creating a model instance
//         static::creating(function ($model) {
//             if ($tenant = app('tenant')) {
//                 $model->tenant_id = $tenant->id;
//             }
//         });
//     }

//     public function tenant()
//     {
//         return $this->belongsTo(Tenant::class);
//     }
// }

