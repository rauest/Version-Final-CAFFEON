'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { User, Mail, Lock, CheckCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface RegisterModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RegisterModal({ open, onOpenChange }: RegisterModalProps) {
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSuccess(true)
    
    // Después de 2 segundos, cerrar el modal y volver a Home
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ username: '', email: '', password: '' })
      onOpenChange(false)
      router.push('/#top')
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setIsSuccess(false)
      setFormData({ username: '', email: '', password: '' })
    }
    onOpenChange(newOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-blanco-menta border-verde-profundo/20">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4">
            <div className="w-16 h-16 bg-verde-profundo/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-verde-profundo" />
            </div>
            <h3 className="font-serif text-2xl text-verde-profundo">Usuario Creado</h3>
            <p className="text-verde-profundo/70 text-center">
              Redirigiendo al inicio...
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-verde-profundo text-center">
                Crear Cuenta
              </DialogTitle>
              <DialogDescription className="text-verde-profundo/70 text-center">
                Únete a la familia Coffeon
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-verde-profundo">
                  Nombre de usuario
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-verde-profundo/50" />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Tu nombre de usuario"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="pl-10 border-verde-profundo/20 focus:border-dorado"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-verde-profundo">
                  Correo electrónico
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-verde-profundo/50" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 border-verde-profundo/20 focus:border-dorado"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-verde-profundo">
                  Contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-verde-profundo/50" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Tu contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                    className="pl-10 border-verde-profundo/20 focus:border-dorado"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-dorado hover:bg-dorado/90 text-verde-profundo font-semibold mt-6"
              >
                Crear Cuenta
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
