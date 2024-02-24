"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { sendEmail } from "../../actions/sendEmail";
import { DrawerClose } from "./ui/drawer";
import { useTranslations } from "next-intl";

const BudgetForm = () => {
  const t = useTranslations("Accordion");

  const BudgetSchema = z.object({
    name: z
      .string({
        required_error: t("formRequiredField"),
      })
      .trim()
      .min(1, t("formRequiredField")),
    email: z
      .string({
        required_error: t("formRequiredField"),
      })
      .email({ message: "Insira um email válido!" })
      .trim()
      .min(1, t("formRequiredField")),
    title: z
      .string({
        required_error: t("formRequiredField"),
      })
      .trim()
      .min(1, t("formRequiredField")),
    content: z
      .string({
        required_error: t("formRequiredField"),
      })
      .trim()
      .min(1, t("formRequiredField")),
    phone: z
      .string({
        required_error: t("formRequiredField"),
      })
      .refine(
        (value) => {
          return (
            /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
            /^\d{2}\s\d{9}$/.test(value) ||
            /^\d{11}$/.test(value)
          );
        },
        {
          message: t("formTelField"),
        },
      ),
  });

  const form = useForm<z.infer<typeof BudgetSchema>>({
    resolver: zodResolver(BudgetSchema),
  });

  const handleSubmit = async (data: z.infer<typeof BudgetSchema>) => {
    try {
      await sendEmail(data);
      form.setValue("name", "");
      form.setValue("content", "");
      form.setValue("email", "");
      form.setValue("title", "");
      form.setValue("phone", "");

      toast.success(t("toastSuccess"), {
        style: {
          fontSize: "12px",
        },
      });
    } catch (error) {
      toast.error(t("toastError"), {
        style: {
          fontSize: "12px",
        },
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-4 text-start"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className=" text-black dark:text-white">
                  {t("name")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("namePlaceholder")}
                    {...field}
                    autoComplete="off"
                    className="placeholder:text-xs"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className=" text-black dark:text-white">
                  {t("whats")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("whatsPlaceholder")}
                    {...field}
                    autoComplete="off"
                    className="placeholder:text-xs"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className=" text-black dark:text-white">
                  {t("email")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("emailPlaceholder")}
                    {...field}
                    autoComplete="off"
                    type="email"
                    className="placeholder:text-xs"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className=" text-black dark:text-white">
                {t("title")}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t("titlePlaceholder")}
                  {...field}
                  autoComplete="off"
                  className="placeholder:text-xs"
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className=" text-black dark:text-white">
                {t("content")}
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  autoComplete="off"
                  className="max-h-28 min-h-28"
                />
              </FormControl>
              <FormDescription className="text-xs">
                {t("contentDescription")}
              </FormDescription>

              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-2">
          <DrawerClose asChild>
            <Button variant="outlineWithoutScale">
              <IoReturnDownBackOutline
                size={20}
                className="mr-2 dark:text-white"
              />
              {t("backButton")}
            </Button>
          </DrawerClose>

          <Button variant={"default"} type="submit" className="w-full">
            {t("submitButton")}
            <LiaFileInvoiceDollarSolid size={20} className="ml-2 text-white" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BudgetForm;
