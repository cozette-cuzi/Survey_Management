export default [
    {
        name: 'APP_LOGIN_SUCCESS',
        callback: function (e) {
            this.snackbars = [...this.snackbars, {
                show: true,
                color: 'green',
                text: 'Logged in !',
                bottom: true,
                right: true
            }]
        }
    },
    {
        name: 'APP_LOGOUT',
        callback: function (e) {
            this.snackbars = [...this.snackbars, {
                show: true,
                color: 'green',
                text: 'Logout successfully.',
                bottom: true,
                right: true
            }];
        }
    },
    {
        name: 'APP_PAGE_LOADED',
        callback: e => {
        }
    },
    {
        name: 'APP_AUTH_FAILED',
        callback: function (e) {
            this.$router.push('/login');
            this.$message.error('Token has expired');
        }
    },
    {
        name: 'APP_BAD_REQUEST',
        // @error api response data
        callback: function (msg, push) {
            this.$message.error(msg);
        }
    },
    {
        name: 'APP_ACCESS_DENIED',
        // @error api response data
        callback: function (msg) {
            this.$message.error(msg);
            this.$router.push('/forbidden');
        }
    },
    {
        name: 'APP_RESOURCE_DELETED',
        // @error api response data
        callback: function (msg) {
            this.$message.success(msg);
        }
    },
    {
        name: 'APP_RESOURCE_UPDATED',
        // @error api response data
        callback: function (msg) {
            this.$message.success(msg);
        }
    },
    {
        name: 'SHOW_TOAST',
        callback: function (msg, color = 'green', position = ['bottom', 'left'], timeout = 3000, action = null) {
            this.snackbars = [...this.snackbars, Object.assign({
                show: true,
                color: color,
                text: msg,
                timeout,
                action
            }, ...position.map(key => ({[key]: true})))];
        }
    }

];
