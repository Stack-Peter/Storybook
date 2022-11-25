import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Example({
  open,
  setOpen,
}: {open: boolean, setOpen: any}) {
  const notifications = [
    {
      title: 'Lorem Ipsum',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ]

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-96">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"></div>
                  </Transition.Child>
                  <div className="h-full overflow-y-auto bg-white">
                    <h1 className="text-[#424242] text-3xl px-8 py-8">Notificações</h1>
                    <div className="divide divide-y-2  border-b-2 border-gray-200">
                      <div className="px-8 py-4">
                        <h6 className="text-[#424242] text-xl mb-2">{notifications[0].title}</h6>
                        <p className="text-[#BDBDBD] text-sm mb-2">{notifications[0].content}</p>
                      </div>
                      <div className="px-8 py-4">
                        <h6 className="text-[#424242] text-xl mb-2">{notifications[0].title}</h6>
                        <p className="text-[#BDBDBD] text-sm mb-2">{notifications[0].content}</p>
                      </div>
                      <div className="px-8 py-4">
                        <h6 className="text-[#424242] text-xl mb-2">{notifications[0].title}</h6>
                        <p className="text-[#BDBDBD] text-sm mb-2">{notifications[0].content}</p>
                      </div>
                      <div className="px-8 py-4">
                        <h6 className="text-[#424242] text-xl mb-2">{notifications[0].title}</h6>
                        <p className="text-[#BDBDBD] text-sm mb-2">{notifications[0].content}</p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
