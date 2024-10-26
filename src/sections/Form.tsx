import { Button } from '@/components/Button/Button'
import { ContainerWithBackground } from '@/components/Containers'
import { SectionHeader } from '@/components/Text/SectionHeader'

export const Form = () => {
  return (
    <section aria-labelledby="form-heading" className="pt-10 sm:pt-0 md:py-20">
      <ContainerWithBackground id="form">
        <div
          className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0"
          id="mc_embed_signup"
        >
          <div className="space-y-10 divide-y divide-gray-900/10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
              <div className="px-4">
                <SectionHeader
                  headingId="form-heading"
                  headingText="Skráning á"
                  highlightText="póstlista"
                  description=" Receive a monthly digest of our network's news and see how Slow Food is shaping a better future."
                />
                <Button
                  className="text-sm"
                  href="mailto:xxx[at]slowfood.is"
                  variant="secondary"
                >
                  Contact us
                </Button>
              </div>

              <form
                action={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate
                className="validate bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 dark:bg-black"
              >
                <div className="px-4 py-6 sm:p-8" id="mc_embed_signup_scroll">
                  <p className="mb-6 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    <span className="text-red-500">*</span> Þarf að fylla út
                  </p>
                  <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="mce-FORNAFN"
                        className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >
                        Fornafn <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          id="mce-FORNAFN"
                          type="text"
                          name="FORNAFN"
                          autoComplete="given-name"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryNeutral sm:text-sm sm:leading-6"
                          defaultValue=""
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="mce-EFTIRNAFN"
                        className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >
                        Eftirnafn <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          id="mce-EFTIRNAFN"
                          type="text"
                          name="EFTIRNAFN"
                          autoComplete="family-name"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryNeutral sm:text-sm sm:leading-6"
                          defaultValue=""
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="mce-EMAIL"
                        className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >
                        Netfang <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          id="mce-EMAIL"
                          type="email"
                          name="EMAIL"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryNeutral sm:text-sm sm:leading-6"
                          defaultValue=""
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="mce-SIMI"
                        className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >
                        Sími
                      </label>
                      <div className="mt-2">
                        <input
                          id="mce-SIMI"
                          type="text"
                          name="SIMI"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryNeutral sm:text-sm sm:leading-6"
                          defaultValue=""
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="mce-HEIMILI-country"
                        className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >
                        Country <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <select
                          id="mce-HEIMILI-country"
                          name="HEIMILI[country]"
                          autoComplete="country-name"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primaryNeutral  sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="mce-HEIMILI-city"
                        className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >
                        Bæjarfélag
                      </label>
                      <div className="mt-2">
                        <input
                          id="mce-HEIMILI-city"
                          type="text"
                          name="HEIMILI[city]"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryNeutral sm:text-sm sm:leading-6"
                          defaultValue=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pb-12">
                    <div className="mt-10 space-y-10">
                      <fieldset>
                        <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                          Staðfesting á skráningu
                        </h2>
                        <div className="mt-6 space-y-6">
                          <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                              <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-primaryNeutral focus:ring-primaryNeutral"
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label
                                htmlFor="comments"
                                className="font-medium text-gray-900 dark:text-white"
                              >
                                Já, takk, ég vil gjarna vera á póstlista Slow Food
                                Reykjavík og fá fundarboð og fréttabréfið.
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between gap-x-6 border-t border-gray-900/10 px-4 py-8 sm:flex-row sm:items-center sm:px-8">
                  <p className="text-sm leading-6 text-gray-600 dark:text-white">
                    After submitting the form, you will receive a confirmation email.
                    Please click the link in the email to confirm your subscription.
                  </p>
                  <Button className="mt-10 text-sm sm:mt-0" isSubmit>
                    Skrá mig
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ContainerWithBackground>
    </section>
  )
}
