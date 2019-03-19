package kr.co.upcoding.vo;

public class ReplyVO {
    String br_id;
    String bp_id;
    String br_id_reply;
    String br_writer;
    String br_date;
    String br_content;
    String br_depth;

    String br_writer_name;

    public String getBr_writer_name() {
        return br_writer_name;
    }

    public void setBr_writer_name(String br_writer_name) {
        this.br_writer_name = br_writer_name;
    }

    public String getBp_id() {
        return bp_id;
    }

    public void setBp_id(String bp_id) {
        this.bp_id = bp_id;
    }

    public String getBr_id() {
        return br_id;
    }

    public void setBr_id(String br_id) {
        this.br_id = br_id;
    }

    public String getBr_id_reply() {
        return br_id_reply;
    }

    public void setBr_id_reply(String br_id_reply) {
        this.br_id_reply = br_id_reply;
    }

    public String getBr_writer() {
        return br_writer;
    }

    public void setBr_writer(String br_writer) {
        this.br_writer = br_writer;
    }

    public String getBr_date() {
        return br_date;
    }

    public void setBr_date(String br_date) {
        this.br_date = br_date;
    }

    public String getBr_content() {
        return br_content;
    }

    public void setBr_content(String br_content) {
        this.br_content = br_content;
    }

    public String getBr_depth() {
        return br_depth;
    }

    public void setBr_depth(String br_depth) {
        this.br_depth = br_depth;
    }

    @Override
    public String toString() {
        return "ReplyVO{" +
                "br_id='" + br_id + '\'' +
                ", br_id_reply='" + br_id_reply + '\'' +
                ", br_writer='" + br_writer + '\'' +
                ", br_date='" + br_date + '\'' +
                ", br_content='" + br_content + '\'' +
                ", br_depth='" + br_depth + '\'' +
                '}';
    }
}
