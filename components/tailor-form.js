function TailorForm() {
  return (
    <div className="flex flex-col space-y-6">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col space-y-6"
      >
        <input
          type="hidden"
          name="apikey"
          value="0cbc8bb5-f4a5-47cc-b139-e6bccefa6ce3"
        />

        <input
          type="hidden"
          name="subject"
          value="New Submission from Web3Forms"
        />

        <input type="hidden" name="ccemail" value="partner@example.com" />

        <input type="hidden" name="replyto" value="customer@example.com" />

        <input
          type="hidden"
          name="redirect"
          value="https://eye-4-clean.vercel.app/shop"
        />

        <input
          type="email"
          name="email"
          placeholder="email"
          className="w-full border border-gray-300"
          required
        />
        <div className="">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
            Wat voor sok wil je maken?
          </label>
          <div className="flex space-x-2 items-center">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
              Happy Sok
            </label>
            <input
              type="checkbox"
              name="typeSok"
              label="Happy Sok"
              value="Happy Sok"
              placeholder="Happy"
              title="Happy"
              className="text-lg"
            />
          </div>
          <div className="flex space-x-2 items-center">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
              Sport Sok
            </label>
            <input
              type="checkbox"
              name="typeSok"
              label="Sport Sok"
              value="Sport Sok"
            />
          </div>
          <div className="flex space-x-2 items-center">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
              Klassieke Sok
            </label>
            <input
              type="checkbox"
              name="typeSok"
              label="Klassieke Sok"
              value="Klassieke Sok"
            />
          </div>
        </div>
        <div className="">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
            Wat voor thema?
          </label>
          <div className="flex space-x-2 items-center">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
              Feestdagen/kerst/sinterklaas/etc
            </label>
            <input
              type="checkbox"
              name="thema"
              label="Feestdagen/kerst/sinterklaas/etc"
              value="Feestdagen/kerst/sinterklaas/etc"
              placeholder="Feestdagen/kerst/sinterklaas/etc"
              title="Feestdagen/kerst/sinterklaas/etc"
              className="text-lg"
            />
          </div>
          <div className="flex space-x-2 items-center">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
              Jubileum/Promotie
            </label>
            <input
              type="checkbox"
              name="thema"
              label="Jubileum/Promotie"
              value="Jubileum/Promotie"
            />
          </div>
          <div className="flex space-x-2 items-center">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
              Anders
            </label>
            <input type="checkbox" name="thema" label="Anders" value="Anders" />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
            Hoeveel paar wil je hebben? (wij leveren 25 paar in 4 werkdagen)
          </label>
          <input type="number" name="paar" placeholder="paar" />
        </div>
        <div className="">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
            Wat voor verpakking?
          </label>
          <div className="flex space-x-2 items-center">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
              Label
            </label>
            <input
              type="checkbox"
              name="verpakking"
              label="Label"
              value="Label"
              placeholder="Label"
              title="Label"
              className="text-lg"
            />
          </div>
          <div className="flex space-x-2 items-center">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
              Banderol
            </label>
            <input
              type="checkbox"
              name="verpakking"
              label="Banderol"
              value="Banderol"
            />
          </div>
        </div>
        <input
          type="text"
          name="First Name"
          placeholder="First Name"
          className="w-full border border-gray-300"
          required
        />
        <input
          type="text"
          name="Phone Number"
          placeholder="Phone"
          className="w-full border border-gray-300"
          required
        />
        <textarea
          name="message"
          placeholder="message"
          className="w-full border border-gray-300"
          required
        ></textarea>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  )
}

export default TailorForm
