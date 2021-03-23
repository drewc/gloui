(import :mukn/glow/cli/contacts :mukn/ethereum/known-addresses
        :mukn/gloui/server/json  :mukn/ethereum/ethereum
        :mukn/ethereum/testing :std/text/json
        :clan/poo/mop :clan/poo/brace :clan/poo/object)
(export #t)

(def (json<-list-contacts (file #f))
  (def ids
    (map (match <> ([name . c] (cons name (0x<-address (.@ c address)))))
         (hash->list (load-contacts file))))
  (def jsos (map (match <> ([name . address]
                            (json<- JSON
                             (.o () name address))))
                 ids))
  (def alice/bob [(json<- JSON { name: "Alice" address: (0x<-address alice)})
                   (json<- JSON { name: "Bob" address: (0x<-address bob)})])
  (with-output-to-string "" (cut write-json (append alice/bob jsos))))