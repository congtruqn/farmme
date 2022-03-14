<template>
    <div>
      <header id="header" class="fixed-top d-flex align-items-center header-transparent">
          <AdminHeader />
      </header>
      <div>
          <router-view />
      </div>
    </div>
</template>
<script>
import AdminHeader from '@/components/partials/AdminHeader'
import AdminMenu from '@/components/partials/AdminMenu'
  export default {
    name: 'defaultLayout',
    components: {
        AdminHeader,
        AdminMenu
    }
  }
</script>