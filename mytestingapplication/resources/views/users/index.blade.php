@extends('layouts.app')

@section('content')
<div class="container">
    hello world
    <div class="card">
        <div class="card-header">Manage Users</div>
        <div class="card-body">
            {{ $dataTable->table() }}
        </div>
    </div>
</div>
@endsection

@push('scripts')
{{ $dataTable->scripts(attributes: ['type' => 'module']) }}
@endpush
