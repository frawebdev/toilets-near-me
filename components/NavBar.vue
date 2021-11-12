<template>
    <nav class="w-full flex flex-row justify-around fixed top-0 bg-grey-400 shadow-lg p-2 z-50 bg-red-400 text-white">
        <button>
            <font-awesome-icon icon="arrow-left" @click="$router.go(-1)"/>
        </button>
        <button>
            <font-awesome-icon icon="arrow-right" @click="$router.go(1)"/>
        </button>
    </nav>
</template>
