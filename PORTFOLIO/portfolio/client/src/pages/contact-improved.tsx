import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactImproved() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Schema definido dinamicamente com traduções
  const formSchema = z.object({
    name: z.string().min(2, {
      message: t('contact.nameRequired'),
    }),
    email: z.string().email({
      message: t('contact.emailInvalid'),
    }),
    subject: z.string().min(5, {
      message: t('contact.subjectRequired'),
    }),
    message: z.string().min(10, {
      message: t('contact.messageRequired'),
    }),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    try {
      // Envio do formulário usando FormSubmit
      const response = await fetch("https://formsubmit.co/ruanleitte@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _captcha: "false", // Desativa o captcha para uma melhor experiência do usuário
        }),
      });
      
      if (response.ok) {
        toast({
          title: t('contact.successTitle'),
          description: t('contact.successMessage')
        });
        setIsSubmitted(true);
      } else {
        throw new Error("Falha ao enviar o formulário");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: t('contact.errorTitle') || "Erro no envio",
        description: t('contact.errorMessage') || "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
      
      if (isSubmitted) {
        setTimeout(() => {
          form.reset();
          setIsSubmitted(false);
        }, 3000);
      }
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      ),
      title: t('contact.location'),
      content: "Salvador, BA",
      delay: 0,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      ),
      title: t('contact.phone'),
      content: "+55 71 9999-10198",
      delay: 0.1,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      ),
      title: t('contact.email'),
      content: "ruan.leitte+site@gmail.com",
      delay: 0.2,
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      ),
      href: "https://www.linkedin.com/in/rjsl/?locale=en_US",
    },
   
  ];

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">
            {t('contact.title')}
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-primary mr-3"></span>
              <span>{t('contact.informationTitle')}</span>
            </h2>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start p-4 bg-muted/50 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: item.delay }}
                >
                  <div className="flex-shrink-0 p-3 bg-primary text-white rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <h3 className="font-medium text-lg mb-4">{t('contact.socialMedia')}</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t('contact.visitProfile')} ${link.name}`}
                    className="p-3 bg-muted hover:bg-primary hover:text-white rounded-full transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="py-8 text-center"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{t('contact.successTitle')}</h3>
                      <p className="text-muted-foreground">
                        {t('contact.successMessage')}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Form {...form}>
                        <form 
                          action="https://formsubmit.co/ruanleitte@gmail.com" 
                          method="POST"
                          onSubmit={form.handleSubmit(onSubmit)} 
                          className="space-y-6"
                        >
                          {/* Campos ocultos para configuração do FormSubmit */}
                          <input type="hidden" name="_captcha" value="false" />
                          <input type="hidden" name="_next" value={window.location.href} />
                          <input type="hidden" name="_subject" value="Contato via Portfolio - Ruan Jasiel" />
                          <input type="hidden" name="_template" value="table" />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel htmlFor="name">{t('contact.name')}</FormLabel>
                                  <FormControl>
                                    <Input 
                                      id="name" 
                                      placeholder={t('contact.name')}
                                      className="bg-muted/50" 
                                      {...field} 
                                      aria-required="true"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel htmlFor="email">{t('contact.email')}</FormLabel>
                                  <FormControl>
                                    <Input 
                                      id="email" 
                                      type="email" 
                                      placeholder="email@exemplo.com" 
                                      className="bg-muted/50" 
                                      {...field} 
                                      aria-required="true"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel htmlFor="subject">{t('contact.subject')}</FormLabel>
                                <FormControl>
                                  <Input 
                                    id="subject" 
                                    placeholder={t('contact.subject')}
                                    className="bg-muted/50" 
                                    {...field} 
                                    aria-required="true"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel htmlFor="message">{t('contact.message')}</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    id="message"
                                    placeholder={t('contact.message')}
                                    className="resize-none min-h-[150px] bg-muted/50"
                                    {...field} 
                                    aria-required="true"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <Button 
                            type="submit" 
                            className="w-full py-6" 
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {t('contact.sending')}
                              </span>
                            ) : t('contact.send')}
                          </Button>
                        </form>
                      </Form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}