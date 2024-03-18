export interface Notification{
  default(title: string, message?: string, actions?: Array<any>): void;
  info(title: string, message?: string, actions?: Array<any>): void;
  success(title: string, message?: string, actions?: Array<any>): void;
  warning(title: string, message?: string, actions?: Array<any>): void;
  danger(title: string, message?: string, actions?: Array<any>): void;
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      notification: {
        default(title: string, message?: string, actions?: Array<any>): void{
          useToast().add({
            actions: actions,
            title: title,
            description: message,
          })
        },
        info(title: string, message?: string, actions?: Array<any>): void{
          useToast().add({
            actions: actions,
            title: title,
            icon: 'i-heroicons-light-bulb',
            description: message,
            color: 'sky'
          })
        },
        success(title: string, message?: string, actions?: Array<any>): void {
          useToast().add({
            actions: actions,
            title: title,
            icon: 'i-heroicons-check-badge',
            description: message,
            color: 'green'
          })
        },
        warning(title: string, message?: string, actions?: Array<any>): void{
          useToast().add({
            actions: actions,
            title: title,
            icon: 'i-heroicons-exclamation-triangle',
            description: message,
            color: 'amber'
          })
        },
        danger(title: string, message?: string, actions?: Array<any>): void{
          useToast().add({
            actions: actions,
            title: title,
            icon: 'i-heroicons-x-circle',
            description: message,
            color: 'red'
          })
        }
      } as Notification
    }
  }
});