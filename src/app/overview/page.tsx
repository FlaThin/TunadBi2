import { Chart } from "@/components/chart";
import { CgOptions } from "react-icons/cg";

import * as Dialog from "@/components/ui/dialog";
import { DatePickerWithRange } from "@/components/date-range-picker/date-range-picker";
import { Button } from "@/components/ui/button";
import { ComboBox } from "@/components/combo-box/combo-box";
import { Input } from "@/components/input";

export default function Finance() {

  return (
    <div className="flex flex-col gap-4 flex-grow">
      <div className="flex justify-end">
        <Dialog.Dialog modal={true}>
          <Dialog.DialogTrigger asChild={true}>
            <button type="button" className="p-2 rounded-full border-zinc-300 border-[1px] w-fit">
              <CgOptions />
            </button>
          </Dialog.DialogTrigger>
          <Dialog.DialogPortal >
            <Dialog.DialogContent className="max-w-[650px]">

              <Dialog.DialogHeader>
                <Dialog.DialogTitle>Options of vision</Dialog.DialogTitle>
                <Dialog.DialogDescription>
                 This menu are the configuration of vision.
                </Dialog.DialogDescription>
              </Dialog.DialogHeader>

              <DatePickerWithRange />

              <div className="grid grid-cols-3 gap-4">
                <ComboBox/>
                <ComboBox/>
                <ComboBox/>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input label="Triggers" />
                <Input label="Emissoras" />
                <Input label="Interesses" />
                <Input label="Locais" />
                <Input label="Programa" />
                <Input label="Min. inserções por emissora" />
              </div>
              

              <Dialog.DialogFooter>
                <Button className="w-full">
                  Save vision
                </Button>
              </Dialog.DialogFooter>

            </Dialog.DialogContent>
          </Dialog.DialogPortal>
        </Dialog.Dialog>
      </div>


      <Chart />
    </div>
  )
}